import { fetchProfileAction } from "@/utils/actions";
import { LuUser2 } from "react-icons/lu";

const UserIcon = async () => {
  const profileImage = await fetchProfileAction();

  if (profileImage)
    return (
      <img src={profileImage} className='w-6 h-6 rounded-full object-cover' />
    );
  return <LuUser2 className='w-6 h-6 bg-primary dark:bg-secondary rounded-full text-white' />;
}
export default UserIcon
