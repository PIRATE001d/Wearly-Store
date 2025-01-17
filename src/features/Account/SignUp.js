import supabase from '../../services/supabase';

const register = async (email, password) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    console.error('Registration failed:', error.message);
    return { success: false, message: error.message };
  }

  console.log('Registration successful:', data);
  return { success: true, data };
};

export default register;
