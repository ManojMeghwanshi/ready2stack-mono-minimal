-- Add rich_content field to case_studies table for rich text content
ALTER TABLE public.case_studies 
ADD COLUMN rich_content TEXT;

-- Add comment to explain the field
COMMENT ON COLUMN public.case_studies.rich_content IS 'Rich text content with HTML formatting including images, headings, bullet points, bold, links';