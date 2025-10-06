import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import RichTextEditor from "@/components/RichTextEditor";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft } from "lucide-react";
import { z } from "zod";

const caseStudySchema = z.object({
  title: z.string().trim().min(1, "Title is required").max(200),
  subtitle: z.string().trim().min(1, "Subtitle is required").max(300),
  category: z.string().trim().min(1, "Category is required").max(100),
  image_url: z.string().trim().url("Must be a valid URL").max(500),
  description: z.string().trim().min(1, "Description is required").max(5000),
  rich_content: z.string().trim().optional(),
});

const EditCaseStudy = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [loadingData, setLoadingData] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    description: "",
    category: "",
    image_url: "",
    rich_content: "",
  });

  useEffect(() => {
    checkAuthAndLoadData();
  }, [id]);

  const checkAuthAndLoadData = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    
    if (!session) {
      navigate("/auth");
      return;
    }

    const { data } = await supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", session.user.id)
      .eq("role", "admin")
      .maybeSingle();

    if (!data) {
      navigate("/");
      toast({
        variant: "destructive",
        title: "Access denied",
        description: "You need admin privileges to access this page.",
      });
      return;
    }

    setIsAdmin(true);
    await loadCaseStudy();
  };

  const loadCaseStudy = async () => {
    if (!id) return;

    const { data, error } = await supabase
      .from("case_studies")
      .select("*")
      .eq("id", id)
      .single();

    if (error || !data) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to load case study.",
      });
      navigate("/crm/manage-case-studies");
      return;
    }

    setFormData({
      title: data.title,
      subtitle: data.subtitle || "",
      description: data.description,
      category: data.category,
      image_url: data.image_url,
      rich_content: data.rich_content || "",
    });
    setLoadingData(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRichContentChange = (value: string) => {
    setFormData({ ...formData, rich_content: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const validated = caseStudySchema.parse(formData);

      const { error } = await supabase
        .from("case_studies")
        .update({
          title: validated.title,
          subtitle: validated.subtitle,
          description: validated.description,
          category: validated.category,
          image_url: validated.image_url,
          rich_content: validated.rich_content || null,
        })
        .eq("id", id);

      if (error) throw error;

      toast({
        title: "Success!",
        description: "Case study has been updated successfully.",
      });

      navigate("/crm/manage-case-studies");
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          variant: "destructive",
          title: "Validation error",
          description: error.errors[0].message,
        });
      } else {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Failed to update case study. Please try again.",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  if (!isAdmin || loadingData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <Link to="/crm/manage-case-studies" className="inline-flex items-center text-sm hover:text-primary">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Manage Case Studies
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Edit Case Study</h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="title">Title *</Label>
              <Input
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                maxLength={200}
              />
            </div>

            <div>
              <Label htmlFor="subtitle">Subtitle *</Label>
              <Input
                id="subtitle"
                name="subtitle"
                value={formData.subtitle}
                onChange={handleChange}
                required
                maxLength={300}
              />
            </div>

            <div>
              <Label htmlFor="category">Category *</Label>
              <Input
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                maxLength={100}
              />
            </div>

            <div>
              <Label htmlFor="image_url">Image URL *</Label>
              <Input
                id="image_url"
                name="image_url"
                type="url"
                value={formData.image_url}
                onChange={handleChange}
                required
                maxLength={500}
              />
              <p className="text-xs text-muted-foreground mt-1">
                Use bright, web-friendly images with good contrast
              </p>
            </div>

            <div>
              <Label htmlFor="description">Brief Description *</Label>
              <Textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                maxLength={5000}
                className="min-h-[80px]"
              />
            </div>

            <div>
              <Label htmlFor="rich_content">Full Content (Rich Text)</Label>
              <p className="text-sm text-muted-foreground mb-2">
                Add your full case study content with formatting, images, headings, and links
              </p>
              <RichTextEditor
                value={formData.rich_content}
                onChange={handleRichContentChange}
                placeholder="Write your full case study content here..."
              />
            </div>

            <div className="flex gap-4 pt-4">
              <Button type="submit" disabled={loading}>
                {loading ? "Updating..." : "Update Case Study"}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => navigate("/crm/manage-case-studies")}
              >
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default EditCaseStudy;
