import { useEffect } from "react";
import { useState } from "react";

import {
  getProfile,
  updateProfile,
} from "../../api/profileApi";

const Profile = () => {

  const [profile, setProfile] =
    useState({});

  useEffect(() => {

    getProfile().then(
      setProfile
    );

  }, []);

  const handleSubmit = async (
    e
  ) => {

    e.preventDefault();

    await updateProfile(
      profile
    );

    alert("Updated");
  };

  return (
    <form
      onSubmit={handleSubmit}
    >

      <input
        value={
          profile.phone || ""
        }
        onChange={(e) =>
          setProfile({
            ...profile,
            phone:
              e.target.value,
          })
        }
      />

      <textarea
        value={
          profile.skills || ""
        }
        onChange={(e) =>
          setProfile({
            ...profile,
            skills:
              e.target.value,
          })
        }
      />

      <button>
        Save
      </button>

    </form>
  );
};

export default Profile;