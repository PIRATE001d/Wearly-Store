import supabase from '../../services/supabase';

const login = async (email, password) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    console.error('Login failed:', error.message);
    return { success: false, message: error.message };
  }

  console.log('Login successful:', data);
  return { success: true, data };
};

export default login;
