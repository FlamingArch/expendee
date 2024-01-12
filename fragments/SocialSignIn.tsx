import Section from "@/views/Section";
import {
  RiAppleFill,
  RiFacebookCircleFill,
  RiGoogleFill,
  RiMicrosoftFill,
} from "@remixicon/react";

export default () => (
  <Section header="Or Sign In Via">
    <div className="flex gap-4">
      <button
        title="Sign In with Apple"
        className="bg-black hover:bg-gray-800 button-socials"
      >
        <RiAppleFill size={24} color="white" />
      </button>
      <button
        title="Sign In with Google"
        className="bg-accent hover:bg-accentDark button-socials"
      >
        <RiGoogleFill size={24} color="white" />
      </button>
      <button
        title="Sign In with Microsoft"
        className="bg-sky-500 hover:bg-sky-600 button-socials"
      >
        <RiMicrosoftFill size={24} color="white" />
      </button>
      <button
        title="Sign In with Facebook"
        className="bg-blue-500 hover:bg-blue-600 button-socials"
      >
        <RiFacebookCircleFill size={24} color="white" />
      </button>
    </div>
  </Section>
);
