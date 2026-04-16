-- 1. Create the Heroes table (Fixed: uses text for ID to avoid UUID errors)
-- Note: If you already have data in a 'uuid' table, you should drop it first or rename it.
CREATE TABLE IF NOT EXISTS public.heroes (
  id text PRIMARY KEY, -- Changed from uuid to text to accept your custom IDs
  slug text UNIQUE NOT NULL,
  name text NOT NULL,
  popular text,
  born text,
  died text,
  image text,
  videoLink text,
  role text,
  points jsonb DEFAULT '[]'::jsonb,
  quiz jsonb DEFAULT '[]'::jsonb,
  ta jsonb DEFAULT '{}'::jsonb,
  "isCompleted" boolean DEFAULT false, 
  "userAnswers" jsonb DEFAULT '[]'::jsonb, 
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Setup Row Level Security (RLS)
ALTER TABLE public.heroes ENABLE ROW LEVEL SECURITY;

-- Drop old policies if they exist to avoid "already exists" errors
DROP POLICY IF EXISTS "Allow public read access" ON public.heroes;
DROP POLICY IF EXISTS "Allow public insert" ON public.heroes;
DROP POLICY IF EXISTS "Allow public update" ON public.heroes;
DROP POLICY IF EXISTS "Allow public delete" ON public.heroes;

-- Create fresh policies (Open access as per your request for simple development)
CREATE POLICY "Allow public read access" ON public.heroes FOR SELECT USING (true);
CREATE POLICY "Allow public insert" ON public.heroes FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public update" ON public.heroes FOR UPDATE USING (true);
CREATE POLICY "Allow public delete" ON public.heroes FOR DELETE USING (true);

-- 3. Storage Setup for Images
-- Create bucket only if it doesn't exist
INSERT INTO storage.buckets (id, name, public) 
VALUES ('hero_images', 'hero_images', true)
ON CONFLICT (id) DO NOTHING;

-- Storage Policies - Dropping ALL to avoid "already exists" error
DROP POLICY IF EXISTS "Public Access" ON storage.objects;
DROP POLICY IF EXISTS "Admin Upload Access" ON storage.objects;
DROP POLICY IF EXISTS "Admin Update Access" ON storage.objects;
DROP POLICY IF EXISTS "Admin Delete Access" ON storage.objects;

CREATE POLICY "Public Access" ON storage.objects FOR SELECT USING (bucket_id = 'hero_images');
CREATE POLICY "Admin Upload Access" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'hero_images');
CREATE POLICY "Admin Update Access" ON storage.objects FOR UPDATE USING (bucket_id = 'hero_images');
CREATE POLICY "Admin Delete Access" ON storage.objects FOR DELETE USING (bucket_id = 'hero_images');

-- 4. Final Refresh
NOTIFY pgrst, 'reload schema';
