import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://axjwujbnyorlocsmfndy.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF4and1amJueW9ybG9jc21mbmR5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY2NzExMDc2MiwiZXhwIjoxOTgyNjg2NzYyfQ.o69VKaVqAmlsSjAuw1lRO9to_QKIiAxa6IUuvRXQB14"
);

export default supabase;
