import React, { useContext, useEffect, useState } from "react";
import { AuthContext, getAuthStatusLocalStorage } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import CRUDTool from "../../components/CRUDTool";
import Navbar from "../../components/Navbar";

const ProfilePage: React.FC = () => {
  const { isLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stoAuth = getAuthStatusLocalStorage();
    if (!stoAuth || stoAuth.isLogin === "no") {
      navigate("/user/sign-in");
    } else {
      setLoading(false);
    }
  }, [navigate]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Navbar />
      {isLogin ? <CRUDTool /> : <p>Please log in to access your profile.</p>}
    </>
  );
};

export default ProfilePage;
