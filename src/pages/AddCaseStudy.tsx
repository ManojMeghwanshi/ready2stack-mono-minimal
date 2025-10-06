import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
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
  description: z.string().trim().min(1, "Description is required").max(5000),
  category: z.string().trim().min(1, "Category is required").max(100),
  image_url: z.string().trim().url("Must be a valid URL").max(500),
  challenge: z.string().trim().max(5000).optional(),
  solution: z.string().trim().max(5000).optional(),
  results: z.string().trim().max(5000).optional(),
});

const AddCaseStudy = () => {
  const [loading, setLoading] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    description: "",
    category: "",
    image_url: "",
    challenge: "",
    solution: "",
    results: "",
  });

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
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
    } else {
      setIsAdmin(true);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const validated = caseStudySchema.parse(formData);

      const { error } = await supabase.from("case_studies").insert([
        {
          title: validated.title,
          subtitle: validated.subtitle || null,
          description: validated.description,
          category: validated.category,
          image_url: validated.image_url,
          challenge: validated.challenge || null,
          solution: validated.solution || null,
          results: validated.results || null,
        },
      ]);

      if (error) throw error;

      toast({
        title: "Success!",
        description: "Case study has been created successfully.",
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
          description: "Failed to create case study. Please try again.",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  if (!isAdmin) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <Link to="/crm" className="inline-flex items-center text-sm hover:text-primary">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Add New Case Study</h1>

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
                placeholder="Enter case study title"
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
                placeholder="Brief subtitle (optional)"
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
                placeholder="e.g., E-commerce, Healthcare, SaaS"
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
                placeholder="https://example.com/image.jpg"
              />
            </div>

            <div>
              <Label htmlFor="description">Description *</Label>
              <Textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                maxLength={5000}
                placeholder="Brief overview of the project"
                className="min-h-[100px]"
              />
            </div>

            <div>
              <Label htmlFor="challenge">Challenge</Label>
              <Textarea
                id="challenge"
                name="challenge"
                value={formData.challenge}
                onChange={handleChange}
                maxLength={5000}
                placeholder="What problem needed to be solved?"
                className="min-h-[100px]"
              />
            </div>

            <div>
              <Label htmlFor="solution">Solution</Label>
              <Textarea
                id="solution"
                name="solution"
                value={formData.solution}
                onChange={handleChange}
                maxLength={5000}
                placeholder="How was the problem addressed?"
                className="min-h-[100px]"
              />
            </div>

            <div>
              <Label htmlFor="results">Results</Label>
              <Textarea
                id="results"
                name="results"
                value={formData.results}
                onChange={handleChange}
                maxLength={5000}
                placeholder="What were the outcomes?"
                className="min-h-[100px]"
              />
            </div>

            <div className="flex gap-4">
              <Button type="submit" disabled={loading}>
                {loading ? "Creating..." : "Create Case Study"}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => navigate("/crm")}
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

export default AddCaseStudy;
