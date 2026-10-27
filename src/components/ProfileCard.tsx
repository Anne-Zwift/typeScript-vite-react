import type { ProfileCardProps } from '../types/userProfileData';

export function ProfileCard({ user }: ProfileCardProps) {
  return (
    <div className='bg-white rounded-lg shadow-xl max-w-md mx-auto mt-10'>
      {/* Avatar image — circular with sky border */}
      <img
        src={user.avatarUrl}
        alt={`Profile image of ${user.name}`}
        className='rounded-full border-4 border-sky-300 w-24 h-24 m-2'
      />
      {/*Name*/}
      <h2 className='text-2xl font-bold text-gray-800 mt-4 text-center'>
        {user.name}
      </h2>
      {/** Bio */}
      <p className='text-sm text-gray-600 mt-2 text-center px-4'>{user.bio}</p>
      {/** Followers Count */}
      <p className='text-xs text-gray-500 mt-4 text-center'>
        {user.followers.toLocaleString('nb-NO')}Followers
      </p>
      {/**Follow/Following button */}
      <button
        className={`mt-6 mb-4 py-2 rounded-full font-semibold transition-colors duration-150 text-white w-full ${user.isFollowing ? 'bg-green-500 hover:bg-green-600' : 'bg-blue-500 hover:bg-blue-600'}`}>
        {user.isFollowing ? 'Following' : 'Follow'}
      </button>
    </div>
  );
}
