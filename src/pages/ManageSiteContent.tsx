import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

const ManageSiteContent = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [content, setContent] = useState<Record<string, { id: string; value: string }>>({});

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
      navigate("/auth");
      return;
    }

    const { data: roleData } = await supabase
      .rpc('has_role', { _user_id: user.id, _role: 'admin' });

    if (!roleData) {
      toast({
        title: "Access Denied",
        description: "You don't have permission to access this page.",
        variant: "destructive",
      });
      navigate("/");
      return;
    }

    fetchContent();
  };

  const fetchContent = async () => {
    try {
      const { data, error } = await supabase
        .from('site_content')
        .select('*');

      if (error) throw error;

      if (data) {
        const contentMap: Record<string, { id: string; value: string }> = {};
        data.forEach(item => {
          contentMap[item.key] = { id: item.id, value: item.content };
        });
        setContent(contentMap);
      }
    } catch (error) {
      console.error("Error fetching content:", error);
      toast({
        title: "Error",
        description: "Failed to load content.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const updates = Object.entries(content).map(([key, { id, value }]) =>
        supabase
          .from('site_content')
          .update({ content: value })
          .eq('id', id)
      );

      const results = await Promise.all(updates);
      const hasError = results.some(result => result.error);

      if (hasError) throw new Error("Failed to update some content");

      toast({
        title: "Success",
        description: "All content updated successfully.",
      });
    } catch (error) {
      console.error("Error saving content:", error);
      toast({
        title: "Error",
        description: "Failed to save content.",
        variant: "destructive",
      });
    } finally {
      setSaving(false);
    }
  };

  const updateContent = (key: string, value: string) => {
    setContent(prev => ({
      ...prev,
      [key]: { ...prev[key], value }
    }));
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin" />
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">Manage Site Content</h1>
            <Button variant="outline" onClick={() => navigate("/crm")}>
              Back to Dashboard
            </Button>
          </div>

          <div className="space-y-6">
            {/* Hero Section */}
            <Card>
              <CardHeader>
                <CardTitle>Hero Section</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="hero-title">Hero Title</Label>
                  <Textarea
                    id="hero-title"
                    value={content.hero_title?.value || ''}
                    onChange={(e) => updateContent('hero_title', e.target.value)}
                    rows={3}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="hero-subtitle">Hero Subtitle</Label>
                  <Textarea
                    id="hero-subtitle"
                    value={content.hero_subtitle?.value || ''}
                    onChange={(e) => updateContent('hero_subtitle', e.target.value)}
                    rows={2}
                    className="mt-2"
                  />
                </div>
              </CardContent>
            </Card>

            {/* About Section */}
            <Card>
              <CardHeader>
                <CardTitle>About Section</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="about-text">About Intro Paragraph</Label>
                  <Textarea
                    id="about-text"
                    value={content.about_intro_text?.value || ''}
                    onChange={(e) => updateContent('about_intro_text', e.target.value)}
                    rows={8}
                    className="mt-2"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Process Steps */}
            <Card>
              <CardHeader>
                <CardTitle>Process Steps</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h4 className="font-semibold">Step 1</h4>
                  <div>
                    <Label htmlFor="step1-title">Title</Label>
                    <input
                      id="step1-title"
                      type="text"
                      value={content.process_step1_title?.value || ''}
                      onChange={(e) => updateContent('process_step1_title', e.target.value)}
                      className="mt-2 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    />
                  </div>
                  <div>
                    <Label htmlFor="step1-desc">Description</Label>
                    <Textarea
                      id="step1-desc"
                      value={content.process_step1_description?.value || ''}
                      onChange={(e) => updateContent('process_step1_description', e.target.value)}
                      rows={2}
                      className="mt-2"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold">Step 2</h4>
                  <div>
                    <Label htmlFor="step2-title">Title</Label>
                    <input
                      id="step2-title"
                      type="text"
                      value={content.process_step2_title?.value || ''}
                      onChange={(e) => updateContent('process_step2_title', e.target.value)}
                      className="mt-2 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    />
                  </div>
                  <div>
                    <Label htmlFor="step2-desc">Description</Label>
                    <Textarea
                      id="step2-desc"
                      value={content.process_step2_description?.value || ''}
                      onChange={(e) => updateContent('process_step2_description', e.target.value)}
                      rows={2}
                      className="mt-2"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold">Step 3</h4>
                  <div>
                    <Label htmlFor="step3-title">Title</Label>
                    <input
                      id="step3-title"
                      type="text"
                      value={content.process_step3_title?.value || ''}
                      onChange={(e) => updateContent('process_step3_title', e.target.value)}
                      className="mt-2 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    />
                  </div>
                  <div>
                    <Label htmlFor="step3-desc">Description</Label>
                    <Textarea
                      id="step3-desc"
                      value={content.process_step3_description?.value || ''}
                      onChange={(e) => updateContent('process_step3_description', e.target.value)}
                      rows={2}
                      className="mt-2"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Footer */}
            <Card>
              <CardHeader>
                <CardTitle>Footer</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="footer-cta">CTA Text</Label>
                  <input
                    id="footer-cta"
                    type="text"
                    value={content.footer_cta?.value || ''}
                    onChange={(e) => updateContent('footer_cta', e.target.value)}
                    className="mt-2 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  />
                </div>
                <div>
                  <Label htmlFor="footer-company">Company Name</Label>
                  <input
                    id="footer-company"
                    type="text"
                    value={content.footer_company_name?.value || ''}
                    onChange={(e) => updateContent('footer_company_name', e.target.value)}
                    className="mt-2 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  />
                </div>
                <div>
                  <Label htmlFor="footer-addr1">Address Line 1</Label>
                  <input
                    id="footer-addr1"
                    type="text"
                    value={content.footer_address_line1?.value || ''}
                    onChange={(e) => updateContent('footer_address_line1', e.target.value)}
                    className="mt-2 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  />
                </div>
                <div>
                  <Label htmlFor="footer-addr2">Address Line 2</Label>
                  <input
                    id="footer-addr2"
                    type="text"
                    value={content.footer_address_line2?.value || ''}
                    onChange={(e) => updateContent('footer_address_line2', e.target.value)}
                    className="mt-2 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Contact Page */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Page</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="contact-heading">Heading</Label>
                  <Textarea
                    id="contact-heading"
                    value={content.contact_heading?.value || ''}
                    onChange={(e) => updateContent('contact_heading', e.target.value)}
                    rows={3}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="contact-email">Email</Label>
                  <input
                    id="contact-email"
                    type="email"
                    value={content.contact_email?.value || ''}
                    onChange={(e) => updateContent('contact_email', e.target.value)}
                    className="mt-2 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  />
                </div>
                <div>
                  <Label htmlFor="contact-phone">Phone</Label>
                  <input
                    id="contact-phone"
                    type="tel"
                    value={content.contact_phone?.value || ''}
                    onChange={(e) => updateContent('contact_phone', e.target.value)}
                    className="mt-2 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  />
                </div>
                <div>
                  <Label htmlFor="contact-address">Office Address</Label>
                  <Textarea
                    id="contact-address"
                    value={content.contact_address?.value || ''}
                    onChange={(e) => updateContent('contact_address', e.target.value)}
                    rows={4}
                    className="mt-2"
                  />
                </div>
              </CardContent>
            </Card>

            <Button onClick={handleSave} disabled={saving} size="lg">
              {saving ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Saving All Changes...
                </>
              ) : (
                "Save All Changes"
              )}
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ManageSiteContent;
