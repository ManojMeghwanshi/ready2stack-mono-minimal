import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { User } from "@supabase/supabase-js";
import { PlusCircle, Edit, LogOut } from "lucide-react";

const CrmDashboard = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    checkUser();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (!session) {
        navigate("/auth");
      } else {
        setUser(session.user);
        checkAdminRole(session.user.id);
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const checkUser = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    
    if (!session) {
      navigate("/auth");
      return;
    }

    setUser(session.user);
    await checkAdminRole(session.user.id);
    setLoading(false);
  };

  const checkAdminRole = async (userId: string) => {
    const { data, error } = await supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", userId)
      .eq("role", "admin")
      .maybeSingle();

    if (!error && data) {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
      toast({
        variant: "destructive",
        title: "Access denied",
        description: "You need admin privileges to access this page.",
      });
      navigate("/");
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
    navigate("/");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  if (!isAdmin) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-xl font-bold">
            CRM Dashboard
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">{user?.email}</span>
            <Button variant="outline" size="sm" onClick={handleLogout}>
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Case Study Management</h1>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Link 
              to="/crm/add-case-study"
              className="group"
            >
              <div className="border rounded-lg p-8 hover:shadow-lg transition-shadow bg-card">
                <PlusCircle className="h-12 w-12 mb-4 text-primary" />
                <h2 className="text-2xl font-semibold mb-2">Add New Case Study</h2>
                <p className="text-muted-foreground">
                  Create and publish a new case study to showcase your work
                </p>
              </div>
            </Link>

            <Link 
              to="/crm/manage-case-studies"
              className="group"
            >
              <div className="border rounded-lg p-8 hover:shadow-lg transition-shadow bg-card">
                <Edit className="h-12 w-12 mb-4 text-primary" />
                <h2 className="text-2xl font-semibold mb-2">Manage Case Studies</h2>
                <p className="text-muted-foreground">
                  Edit or delete existing case studies from your portfolio
                </p>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CrmDashboard;
