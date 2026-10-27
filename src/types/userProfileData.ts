export interface UserProfileData {
  avatarUrl: string;
  name: string;
  bio: string;
  followers: number;
  isFollowing: boolean;
}

export interface ProfileCardProps {
  user: UserProfileData;
}
