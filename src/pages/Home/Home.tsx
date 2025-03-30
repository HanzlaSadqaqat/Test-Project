import { useEffect, useState } from "react";
import { Button } from "../../components/UI/Button/Button";
import Card from "../../components/UI/Card/Card";
import Checkbox from "../../components/UI/Checkbox/Checkbox";

const Home = () => {
  const [selectedPages, setSelectedPages] = useState<string[]>([]);
  const pages = ["Page 1", "Page 2", "Page 3", "Page 4"];

  const handleToggle = (page: string) => {
    setSelectedPages((prev) =>
      prev.includes(page) ? prev.filter((p) => p !== page) : [...prev, page]
    );
  };

  const handleToggleAll = (e: any) => {
    if (e.target.checked) {
      setSelectedPages([...pages]);
    } else {
      setSelectedPages([]);
    }
  };

  return (
    <div className="w-full flex justify-center items-center">
      <Card width="370px" height="326px" padding="0px" margin="0px">
        <div className="flex flex-col items-center w-full h-full py-[10px]">
          <PageOption
            label="All Pages"
            checked={selectedPages.length === pages.length}
            onChange={handleToggleAll}
          />
          <hr className="my-[10px] w-[340px] border-[#CDCDCD]" />
          {pages.map((page) => (
            <PageOption
              key={page}
              label={page}
              checked={selectedPages.includes(page)}
              onChange={() => handleToggle(page)}
            />
          ))}
          <hr className="my-[10px] w-[340px] border-[#CDCDCD]" />
          <div className="w-full px-[15px] py-[10px]">
            <Button variant="primary" width="340px" height="40px">
              Done
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

const PageOption = ({ label, checked, onChange }: any) => {
  return (
    <div className="w-full px-[25px] py-[8px] flex justify-between">
      {label} <Checkbox checked={checked} onChange={onChange} />
    </div>
  );
};

export default Home;
