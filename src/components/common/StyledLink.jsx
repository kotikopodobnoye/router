import { Link } from "react-router-dom";
import { classNames } from "../../utils/class-names";

export default function StyledLink({ children, className, ...props }) {
  return (
    <Link
      className={classNames("hover:underline hover:text-indigo-700", className)}
      {...props}
    >
      {children}
    </Link>
  );
}
