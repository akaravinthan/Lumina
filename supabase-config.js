// Supabase Configuration
var SUPABASE_URL = 'https://ndmsalkwbhltyaceefdc.supabase.co';
var SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5kbXNhbGt3YmhsdHlhY2VlZmRjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUyNzQ0MDAsImV4cCI6MjA5MDg1MDQwMH0.sUFKXDbuvEH-jdEuovWLO5xJVRdbqrn31DssZj0tZDk';

// Initialize Supabase Client
if (!window.supabaseClient) {
    window.supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}
var supabase = window.supabaseClient;

// Helper function to fetch all heroes
async function fetchHeroesFromDB() {
    const { data: heroes, error } = await supabase
        .from('heroes')
        .select('*')
        .order('created_at', { ascending: true });

    if (error) {
        console.error('Error fetching heroes from Supabase:', error);
        return [];
    }
    return heroes;
}

// Helper to login
async function loginAdmin(email, password) {
    const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
    });
    return { data, error };
}

// Helper to logout
async function logoutAdmin() {
    await supabase.auth.signOut();
}

// Helper to login with Google
async function signInWithGoogle(customRedirectUrl) {
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
            // Use custom redirect URL if provided, otherwise fallback to auto-detection
            redirectTo: customRedirectUrl || window.location.origin + window.location.pathname.replace(/\/?[^\/]*$/, '/admin.html'),
            queryParams: {
                prompt: 'select_account'
            }
        }
    });
    return { data, error };
}

// Helper to get current session
async function getSession() {
    const { data, error } = await supabase.auth.getSession();
    return data.session;
}

// Helper to upload image
async function uploadHeroImage(file, fileName) {
    const { data, error } = await supabase.storage
        .from('hero_images')
        .upload(`public/${fileName}`, file, {
            cacheControl: '3600',
            upsert: true
        });

    if (error) {
        console.error('Upload Error:', error);
        return null;
    }

    // Get public URL
    const { data: publicUrlData } = supabase.storage
        .from('hero_images')
        .getPublicUrl(data.path);

    return publicUrlData.publicUrl;
}
