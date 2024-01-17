import { useRouter } from "next/router";
import { useCallback } from "react";

interface HeaderProps {
  label: string;
  showBackArrow?: Boolean;
}
const Header: React.FC<HeaderProps> = ({ label, showBackArrow }) => {
  const router = useRouter();

  const handleBack = useCallback(() => {
    router.back();
  }, [router]);

  return <div>Header</div>;
};

export default Header;
