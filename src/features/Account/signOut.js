import supabase from '../../services/supabase';

const logout = async () => {
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.error('Logout failed:', error.message);
    return { success: false, message: error.message };
  }

  console.log('Logout successful');
  return { success: true };
};

export default logout;
