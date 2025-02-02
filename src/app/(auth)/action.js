"use server";

export async function loginAction(prevData, formData) {
  // console.log("Received formData:", formData);
  setTimeout(() => {
    const data = {
      id_user: formData.get("id_user"),
      password: formData.get("password"),
    };

    console.log(data);

    return {
      message: "success",
    };
  }, 3000);
}
