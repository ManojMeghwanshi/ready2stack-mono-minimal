import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Image, Bold, Italic, Heading, List } from "lucide-react";

interface MarkdownEditorProps {
  value: string;
  onChange: (value: string) => void;
  label: string;
  placeholder?: string;
  rows?: number;
}

export const MarkdownEditor = ({
  value,
  onChange,
  label,
  placeholder,
  rows = 12,
}: MarkdownEditorProps) => {
  const [imageUrl, setImageUrl] = useState("");
  const [imageAlt, setImageAlt] = useState("");
  const [isImageDialogOpen, setIsImageDialogOpen] = useState(false);

  const insertAtCursor = (before: string, after: string = "") => {
    const textarea = document.getElementById("markdown-textarea") as HTMLTextAreaElement;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = value.substring(start, end);
    const newText = value.substring(0, start) + before + selectedText + after + value.substring(end);
    
    onChange(newText);
    
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start + before.length, start + before.length + selectedText.length);
    }, 0);
  };

  const handleInsertImage = () => {
    if (imageUrl) {
      const markdown = `![${imageAlt || "Image"}](${imageUrl})`;
      const textarea = document.getElementById("markdown-textarea") as HTMLTextAreaElement;
      if (textarea) {
        const start = textarea.selectionStart;
        const newText = value.substring(0, start) + "\n\n" + markdown + "\n\n" + value.substring(start);
        onChange(newText);
      }
      setImageUrl("");
      setImageAlt("");
      setIsImageDialogOpen(false);
    }
  };

  return (
    <div className="space-y-2">
      <Label htmlFor="markdown-textarea">{label}</Label>
      
      {/* Formatting toolbar */}
      <div className="flex flex-wrap gap-1 p-2 border rounded-md bg-muted/50">
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => insertAtCursor("**", "**")}
          title="Bold"
        >
          <Bold className="h-4 w-4" />
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => insertAtCursor("*", "*")}
          title="Italic"
        >
          <Italic className="h-4 w-4" />
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => insertAtCursor("## ", "")}
          title="Heading"
        >
          <Heading className="h-4 w-4" />
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => insertAtCursor("- ", "")}
          title="List"
        >
          <List className="h-4 w-4" />
        </Button>
        
        <Dialog open={isImageDialogOpen} onOpenChange={setIsImageDialogOpen}>
          <DialogTrigger asChild>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              title="Insert Image"
            >
              <Image className="h-4 w-4" />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Insert Image</DialogTitle>
              <DialogDescription>
                Add an image URL to insert it into your content.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="image-url">Image URL</Label>
                <Input
                  id="image-url"
                  placeholder="https://example.com/image.jpg"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="image-alt">Alt Text (optional)</Label>
                <Input
                  id="image-alt"
                  placeholder="Descriptive text for the image"
                  value={imageAlt}
                  onChange={(e) => setImageAlt(e.target.value)}
                />
              </div>
            </div>
            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsImageDialogOpen(false)}
              >
                Cancel
              </Button>
              <Button type="button" onClick={handleInsertImage}>
                Insert Image
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Textarea */}
      <Textarea
        id="markdown-textarea"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={rows}
        className="font-mono text-sm"
      />
      
      <p className="text-xs text-muted-foreground">
        Supports Markdown formatting. Use the toolbar buttons or type manually.
      </p>
    </div>
  );
};
