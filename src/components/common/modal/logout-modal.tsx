import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Spinner } from "@/components/ui/spinner";
import { logoutUser } from "@/services/auth-service";
import { useAuthStore } from "@/store/auth-store";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

interface LogoutProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const LogoutModal = ({ open, setOpen }: LogoutProps) => {
  const { clearAuth, refresh } = useAuthStore();
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const handleLogout = async () => {
    setLoading(true)
    try {
        if (!refresh) {
            throw new Error('No refresh token found')
        }
        await logoutUser(refresh)
        clearAuth()
        toast.success('Logout successfull!')
        router.push('/login')
    } catch (error: any) {
        console.log(error?.message)
        toast.error("Failed to logout!")
    } finally{
        setLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={() => setOpen(false)}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Logout</DialogTitle>
          <DialogDescription>Are you sure want to logout?</DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <DialogClose
            render={
              <Button type="button" variant="outline">
                Cancel
              </Button>
            }
          />
          <Button
          onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 cursor-pointer"
            type="submit"
            disabled={loading}
          >
            {loading ? <Spinner /> : "Logout"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default LogoutModal;
