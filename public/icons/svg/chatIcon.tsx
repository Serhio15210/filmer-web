import { SvgIconProps } from "#/icons/svg/type";

const ChatIcon = (props: SvgIconProps) => {
  return (
    <svg
      fill={props.color || "#000"}
      height={props.height || 24}
      width={props.width || 24}
      version="1.1"
      id="Icons"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
    >
      <path
        d="M25,8.2c-0.3-4-3.6-7.2-7.7-7.2H8.8C4.5,1,1,4.5,1,8.7V23c0,0.4,0.2,0.7,0.6,0.9C1.7,24,1.9,24,2,24c0.2,0,0.5-0.1,0.7-0.2
	c1.3-1.1,2.8-2,4.3-2.7V30c0,0.4,0.2,0.7,0.6,0.9C7.7,31,7.9,31,8,31c0.2,0,0.5-0.1,0.7-0.2c2.9-2.6,6.7-4,10.6-4h4
	c4.3,0,7.8-3.5,7.8-7.7v-3.4C31,12.1,28.4,9,25,8.2z M29,19.1c0,3.2-2.6,5.7-5.8,5.7h-4C15.6,24.8,12,25.9,9,28v-7.6
	c1.4-0.4,2.8-0.6,4.3-0.6h4c4.3,0,7.8-3.5,7.8-7.7v-1.8c2.3,0.7,4,2.9,4,5.4V19.1z"
      />
    </svg>
  );
};

export default ChatIcon;
