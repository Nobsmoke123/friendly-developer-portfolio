import type { Route } from "./+types/index";

// import { Form } from "react-router";

// // React router actions
// export async function action({ request }: Route.ActionArgs) {
//   const formData = await request.formData();
//   const name = formData.get("name");
//   const email = formData.get("email");
//   const subject = formData.get("subject");
//   const message = formData.get("message");

//   const errors: Record<string, string> = {};

//   if (!name) errors.name = "Name is required.";
//   if (!email) {
//     errors.email = "Email is required.";
//   } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email as string)) {
//     errors.email = "Invalid email format.";
//   }
//   if (!subject) errors.subject = "Subject is required.";
//   if (!message) errors.message = "Message is required.";

//   if (Object.keys(errors).length > 0) {
//     return { errors };
//   }

//   const data = {
//     name,
//     email,
//     subject,
//     message,
//   };

//   return { message: "Form submitted successfully", data };
// }

const ContactPage = ({ actionData }: Route.ComponentProps) => {
  return (
    <>
      <div className="max-w-3xl mx-auto mt-12 px-6 py-8 bg-white">
        <h2 className="text-3xl font-bold text-black  mb-8 text-center">
          ✉️ Contact Me
        </h2>

        {/* {actionData?.message ? (
          <p className="mb-6 bg-zinc-900 text-white text-sm rounded-sm shadow-md px-4 py-3">
            {" "}
            {actionData.message}
          </p>
        ) : null} */}

        <form
          method="post"
          action={"https://formspree.io/f/xnnyjqda"}
          className="space-y-6"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-black"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full mt-1 px-4 py-2 text-black border border-stone-200 rounded bg-stone-200"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-black"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full mt-1 px-4 py-2 text-black border border-stone-200 rounded bg-stone-200"
            />
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-semibold text-black"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="w-full mt-1 px-4 py-2 text-black border border-stone-200 rounded bg-stone-200"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-black"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="w-full mt-1 px-4 py-2 text-black border border-stone-200 rounded bg-stone-200"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full px-4 py-3 bg-zinc-900 text-white text-sm font-semibold rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactPage;
