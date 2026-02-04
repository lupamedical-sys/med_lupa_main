const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  `https://zdomkedllpcjnqtzmbut.supabase.co`,
  `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpkb21rZWRsbHBjam5xdHptYnV0Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MDE4OTkyNSwiZXhwIjoyMDg1NzY1OTI1fQ.1bxDuHR91ylIy7MaBE9mYrKYFojSXgqC8Vq7e_LvdIQ`
);

module.exports = supabase;