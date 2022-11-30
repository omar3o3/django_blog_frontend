import React , {useEffect , useState} from 'react'
import axiosInstance from "../axios";

function AccountPage() {
    // const userId = localStorage.getItem("userId");

    // useEffect(() => {
    //   axiosInstance
    //     .get(`blog-api/account-info/${userId}`)
    //     //   .then(resp => console.log(resp.data));
    //     .then((resp) => console.dir(resp.data));
    // }, [userId]);

  return (
    <div>AccountPage</div>
  )
}

export default AccountPage