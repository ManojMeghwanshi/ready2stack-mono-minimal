import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft } from "lucide-react";
import { z } from "zod";

const caseStudySchema = z.object({
  title: z.string().trim().min(1, "Title is required").max(200),
  subtitle: z.string().trim().max(300).optional(),
  description: z.string().trim().min(1, "Description is required").max(10000),
  category: z.string().trim().min(1, "Category is required").max(100),
  image_url: z.string().trim().url("Must be a valid URL").max(500),
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
    });
    setLoadingData(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
          subtitle: validated.subtitle || null,
          description: validated.description,
          category: validated.category,
          image_url: validated.image_url,
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
        <div className="max-w-3xl mx-auto">
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
              <Label htmlFor="subtitle">Subtitle</Label>
              <Input
                id="subtitle"
                name="subtitle"
                value={formData.subtitle}
                onChange={handleChange}
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
              <Label htmlFor="image_url">Blog Thumbnail Image URL *</Label>
              <Input
                id="image_url"
                name="image_url"
                type="url"
                value={formData.image_url}
                onChange={handleChange}
                required
                maxLength={500}
                placeholder="https://example.com/thumbnail.jpg"
              />
              <p className="text-sm text-muted-foreground mt-1">
                Enter the URL of the thumbnail image for this case study
              </p>
            </div>

            <div>
              <Label htmlFor="description">Description *</Label>
              <Textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                maxLength={10000}
                className="min-h-[200px]"
                placeholder="Write your case study content here. You can include detailed descriptions, insights, and outcomes."
              />
              <p className="text-sm text-muted-foreground mt-1">
                Supports text content (up to 10,000 characters)
              </p>
            </div>

            <div className="flex gap-4">
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
