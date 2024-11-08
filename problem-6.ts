
interface Profile {
  name: string;
  age: number;
  email: string;
}

/* ---------Optional Key and value of the profile -------- */
type ProfilePartial<T> = {
    [P in keyof T]?: T[P];
};

const updateProfile = (profileObject: Profile, profileUpdate:ProfilePartial<Profile>): Profile => {
      const updatedProfileObj = {...profileObject, ...profileUpdate};
      return updatedProfileObj;
};

// Sample Input :
const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
// console.log(updateProfile(myProfile, { age: 26 }));
