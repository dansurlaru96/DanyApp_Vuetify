import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://nvidybfgbvebgpfvuttu.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im52aWR5YmZnYnZlYmdwZnZ1dHR1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI5MzU2NTcsImV4cCI6MjAzODUxMTY1N30.ZYfgGp8oNIm_vVnk8kGsaxEIrHGm8ifRa0AZoZc3WvQ"
);
