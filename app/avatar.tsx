import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";

export function AuthAvatar() {
  return (
    <Link href="/sign-in">
      <Avatar>
        <AvatarFallback className="bg-darkBlue bg-opacity-30 shadow-inner shadow-lightBlue">
          DU
        </AvatarFallback>
      </Avatar>
    </Link>
  );
}
