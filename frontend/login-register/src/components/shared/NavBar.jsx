import { LogOut, User2 } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Link } from "react-router-dom";

const NavBar = () => {
  const user = true;
  return (
    <div>
      <div className="max-w-7xl mx-auto p-2 flex justify-between items-center">
        <p className="font-bold text-2xl">
          Job<span className="text-[#f00]">Hunt</span>
        </p>
        {user ? (
          <ul className="flex gap-4 font-semibold items-center">
            <li>Home</li>
            <li>Contact</li>
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>Profile</AvatarFallback>
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="flex gap-3 items-center">
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>VG</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <p className="font-semibold m-0">Vivek Gangani</p>
                    <small className="text-muted-foreground">Developer</small>
                  </div>
                </div>
                <div className="mt-3 block">
                  <Link to="/" className="flex">
                    <div className="flex items-center cursor-pointer bg-slate-200 rounded-md px-3 dark:bg-slate-800">
                      <User2 className="mr-1" />
                      <Button variant="link" className="px-0">
                        View Profile
                      </Button>
                    </div>
                  </Link>
                </div>
                <div className="mt-1 block">
                  <Link to="/" className="flex">
                    <div className="flex items-center cursor-pointer bg-slate-200 rounded-md px-3 dark:bg-slate-800">
                      <LogOut className="mr-1" />
                      <Button variant="link" className="px-0">
                        Logout
                      </Button>
                    </div>
                  </Link>
                </div>
              </PopoverContent>
            </Popover>
          </ul>
        ) : (
          <div className="flex gap-2">
            <Link to="/login">
              <Button variant="outline">Login</Button>
            </Link>
            <Link to="/signup">
              <Button>SignUp</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
