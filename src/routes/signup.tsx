import { createFileRoute } from "@tanstack/react-router";
import Button from "../components/button";

export const Route = createFileRoute("/signup")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <div className="md:w-[280px] flex flex-col gap-0 p-4 md:border-r border-white/10 justify-center items-center">
        <h1 className="font-branding font-bold text-2xl p-5">Expendee</h1>
      </div>
      {/* absolute inset-6 top-24 md:inset-24 for Modal */}
      <div className="flex md:w-[480px] flex-1 bg-white text-center text-black dark:bg-black dark:text-white justify-center">
        <div className="flex flex-col gap-4 p-6 md:p-12 justify-center flex-1 md:flex-none md:w-[480px]">
          <p className="text-2xl">Sign Up</p>
          <p>Create your Expendee ID</p>
          <input
            className="bg-slate-200 dark:bg-slate-900 rounded-full p-3 px-5 text-sm outline-none"
            placeholder="Username"
            type="text"
          />
          <input
            className="bg-slate-200 dark:bg-slate-900 rounded-full p-3 px-5 text-sm outline-none"
            placeholder="Password"
            type="password"
          />
          <input
            className="bg-slate-200 dark:bg-slate-900 rounded-full p-3 px-5 text-sm outline-none"
            placeholder="Repeat Password"
            type="password"
          />
          <Button type="prominent" label="Continue" />

          <hr />

          <p>Already have an Expendee ID?</p>
          <Button label="Sign In" />
          <Button
            label={
              <p>
                <span className="font-bold">NEW!</span> Use Expendee without an
                ID
              </p>
            }
          />
        </div>
        <div className="flex flex-col gap-4 p-6 md:p-12 justify-center flex-1 md:flex-none md:w-[480px]">
          <p className="text-2xl">Just a few more things</p>
          <p>Personal Details</p>
          <input
            className="bg-slate-200 dark:bg-slate-900 rounded-full p-3 px-5 text-sm outline-none"
            placeholder="Name"
            type="text"
          />
          <input
            className="bg-slate-200 dark:bg-slate-900 rounded-full p-3 px-5 text-sm outline-none"
            placeholder="Email"
            type="email"
          />
          <input
            className="bg-slate-200 dark:bg-slate-900 rounded-full p-3 px-5 text-sm outline-none"
            placeholder="Phone Number (Optional)"
            type="tel"
          />
          {/* TODO: Custom Checkboxes */}
          <div className="flex items-baseline gap-2 text-left">
            <input type="checkbox" />
            <p>
              I agree to the{" "}
              <a className="text-blue-700 font-bold" href="">
                Terms and Conditions
              </a>{" "}
              and{" "}
              <a className="text-blue-700 font-bold" href="">
                Privacy Policy
              </a>
            </p>
          </div>
          <div className="flex items-baseline gap-2 text-left">
            <input type="checkbox" />
            <p>
              Send me Email about new features and announcements.{" "}
              <b>I can unsubscribe any time.</b>
            </p>
          </div>
          <Button type="prominent" label="Sign Up" />
        </div>
      </div>
    </>
  );
}
