export type IconProps = {
  className?: string;
};

export function IconPlus({ className }: IconProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18 12.998H13V17.998C13 18.2632 12.8946 18.5176 12.7071 18.7051C12.5196 18.8926 12.2652 18.998 12 18.998C11.7348 18.998 11.4804 18.8926 11.2929 18.7051C11.1054 18.5176 11 18.2632 11 17.998V12.998H6C5.73478 12.998 5.48043 12.8926 5.29289 12.7051C5.10536 12.5176 5 12.2632 5 11.998C5 11.7328 5.10536 11.4784 5.29289 11.2909C5.48043 11.1034 5.73478 10.998 6 10.998H11V5.998C11 5.73278 11.1054 5.47843 11.2929 5.29089C11.4804 5.10336 11.7348 4.998 12 4.998C12.2652 4.998 12.5196 5.10336 12.7071 5.29089C12.8946 5.47843 13 5.73278 13 5.998V10.998H18C18.2652 10.998 18.5196 11.1034 18.7071 11.2909C18.8946 11.4784 19 11.7328 19 11.998C19 12.2632 18.8946 12.5176 18.7071 12.7051C18.5196 12.8926 18.2652 12.998 18 12.998Z" />
    </svg>
  );
}

export function IconTick({ className }: IconProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M21 7L9 19L3.5 13.5L4.91 12.09L9 16.17L19.59 5.59L21 7Z" />
    </svg>
  );
}

export function IconSort({ className }: IconProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M3 18V16H9V18H3ZM3 13V11H15V13H3ZM3 8V6H21V8H3Z" />
    </svg>
  );
}

export function IconSearch({ className }: IconProps) {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19.6 21.5L13.3 15.2C12.8 15.6 12.225 15.9167 11.575 16.15C10.925 16.3833 10.2333 16.5 9.5 16.5C7.68333 16.5 6.146 15.8707 4.888 14.612C3.63 13.3533 3.00067 11.816 3 10C3 8.18333 3.62933 6.646 4.888 5.388C6.14667 4.13 7.684 3.50067 9.5 3.5C11.3167 3.5 12.854 4.12933 14.112 5.388C15.37 6.64667 15.9993 8.184 16 10C16 10.7333 15.8833 11.425 15.65 12.075C15.4167 12.725 15.1 13.3 14.7 13.8L21 20.1L19.6 21.5ZM9.5 14.5C10.75 14.5 11.8127 14.0623 12.688 13.187C13.5633 12.3117 14.0007 11.2493 14 10C14 8.75 13.5623 7.68733 12.687 6.812C11.8117 5.93667 10.7493 5.49933 9.5 5.5C8.25 5.5 7.18733 5.93767 6.312 6.813C5.43667 7.68833 4.99933 8.75067 5 10C5 11.25 5.43767 12.3127 6.313 13.188C7.18833 14.0633 8.25067 14.5007 9.5 14.5Z" />
    </svg>
  );
}

export function IconCollapseSidebar({ className }: IconProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 4V20M4 6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20H6C5.46957 20 4.96086 19.7893 4.58579 19.4142C4.21071 19.0391 4 18.5304 4 18V6Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 10L13 12L15 14"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
