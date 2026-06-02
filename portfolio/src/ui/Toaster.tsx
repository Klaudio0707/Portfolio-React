import { Toaster as Sonner, type ToasterProps } from "sonner";
import { 
  CircleCheckIcon, 
  InfoIcon, 
  Loader2Icon, 
  OctagonXIcon, 
  TriangleAlertIcon 
} from "lucide-react";
import styles from "./Toaster.module.scss";

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme="dark"
      position="top-center"
      offset="90px"
      className="toaster group"
      icons={{
        success: <CircleCheckIcon className={styles.icon} />,
        info: <InfoIcon className={styles.icon} />,
        warning: <TriangleAlertIcon className={styles.icon} />,
        error: <OctagonXIcon className={styles.icon} />,
        loading: <Loader2Icon className={`${styles.icon} ${styles.spin}`} />,
      }}
      toastOptions={{
        classNames: {
          toast: styles.customToast,
          title: styles.toastTitle,
          description: styles.toastDescription,
        },
      }}
      {...props}
    />
  );
};

export { Toaster };