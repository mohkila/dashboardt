import { Card } from "../ui/card";
import Image from "next/image";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogDescription,
  DialogFooter,
  DialogTitle,
  DialogClose,
} from "../ui/dialog";
import { Checkbox } from "../ui/checkbox";
import { useState, useEffect } from "react";
import { toast } from "sonner";

// Define User interface (if not already defined in your project)
interface User {
  name: string;
  email: string;
  image?: string;
  location?: string;
  isAdmin: boolean;
}

// Props for TeamCard component
interface TeamMemberCardProps {
  member: User;
  isPending: boolean;
  role: boolean;
}

// Placeholder API calls (Replace with actual API logic)
const approveTeamMember = async (data: { email: string; name: string }) => {
  console.log("Approved:", data);
};

const declineTeamMember = async (data: { email: string; name: string }) => {
  console.log("Declined:", data);
};

const updateTeamMember = async (data: { email: string; isAdmin: boolean }) => {
  console.log("Updated:", data);
};

const deleteTeamMember = async (data: { email: string }) => {
  console.log("Deleted:", data);
};

export default function TeamCard({ member, isPending, role }: TeamMemberCardProps) {
  const [isAdmin, setIsAdmin] = useState(member.isAdmin);
  const imageUrl = member.image && member.image !== "no-image" ? member.image : "/fallbackimage.png";

  useEffect(() => {
    setIsAdmin(member.isAdmin);
  }, [member.isAdmin]);

  // Approve Team Member
  const handleApproveTeamMember = async () => {
    if (!role) return toast.error("You must be an admin to approve a team member");

    await approveTeamMember({ email: member.email, name: member.name });
    toast.success(`${member.name} has been approved`);
  };

  // Decline Team Member
  const handleDeclineTeamMember = async () => {
    if (!role) return toast.error("You must be an admin to decline a team member");

    await declineTeamMember({ email: member.email, name: member.name });
    toast.success(`${member.name} has been declined`);
  };

  // Update Role
  const handleUpdateRole = async () => {
    await updateTeamMember({ email: member.email, isAdmin });
    toast.success(`Role for ${member.name} has been updated`);
  };

  // Delete Team Member
  const handleDeleteTeamMember = async () => {
    if (!role) return toast.error("You must be an admin to delete a team member.");

    await deleteTeamMember({ email: member.email });
    toast.success(`${member.name} has been deleted`);
  };

  return (
    <Card className="dark:bg-tertiary bg-slate-800 flex flex-col justify-between items-center overflow-hidden shadow-lg rounded-lg p-4 gap-4 relative">
      <Image className="rounded-full" src={imageUrl} width={100} height={100} alt={`image of ${member.name}`} />
      <h1 className="text-center">{member.name}</h1>
      <span>{member.location}</span>
      <div className="absolute right-3 bg-primary px-1 rounded-md text-white">{member.isAdmin ? "Admin" : ""}</div>

      <div className="flex items-center gap-2">
        {isPending ? (
          <>
            <Button onClick={handleApproveTeamMember} disabled={!role}>
              Approve
            </Button>
            <Button variant="destructive" onClick={handleDeclineTeamMember} disabled={!role}>
              Decline
            </Button>
          </>
        ) : (
          <>
            <Dialog>
              <DialogTrigger asChild>
                <Button disabled={!role}>Edit</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Edit Team Member</DialogTitle>
                  <DialogDescription>Update the role of {member.name}</DialogDescription>
                </DialogHeader>
                <Image src={imageUrl} width={50} height={50} alt={`Image of ${member.name}`} />
                <div className="flex items-center space-x-2">
                  <Checkbox id="admin" checked={isAdmin} onCheckedChange={(checked) => setIsAdmin(!!checked)} />
                  <label htmlFor="admin">Admin</label>
                </div>
                <DialogClose>
                  <Button onClick={handleUpdateRole}>Save Changes</Button>
                </DialogClose>
              </DialogContent>
            </Dialog>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="destructive" disabled={!role}>
                  Delete
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Delete Team Member</DialogTitle>
                  <DialogDescription>Are you sure you want to delete {member.name}? This action cannot be undone.</DialogDescription>
                </DialogHeader>
                <div className="flex justify-end gap-2">
                  <DialogClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DialogClose>
                  <DialogClose asChild>
                    <Button variant="destructive" onClick={handleDeleteTeamMember}>
                      Yes, Delete
                    </Button>
                  </DialogClose>
                </div>
              </DialogContent>
            </Dialog>
          </>
        )}
      </div>
    </Card>
  );
}
