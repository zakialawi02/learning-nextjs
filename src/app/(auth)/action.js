"use server";

// Simulate a server action
const wait = (ms = 3000) => new Promise((resolve) => setTimeout(resolve, ms));

export async function loginAction(prevData, formData) {
  // console.log("Received formData:", formData);
  await wait(1000);
  const data = {
    id_user: formData.get("id_user"),
    password: formData.get("password"),
  };
  const req = await fetch("https://demo4.zakialawi.my.id/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const res = await req.json();
  if (req.ok) {
    console.log(res);

    return res;
  } else {
    return {
      ...res,
      data: {
        id_user: data.id_user,
      },
    };
  }
}
