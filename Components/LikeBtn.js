import { useState } from "react";
import { AiOutlineHeart, AiFillHeart, AiOutlineLoading } from "react-icons/ai";

function LikeBtn({ id }) {


  const [loading, setLoading] = useState(false);
  const [like, setlike] = useState(false);



  const handelClick = async () => {
    setLoading(true);
    if (loading) {
      setLoading(false);
      setlike(!like);
    } else {
      setLoading(false);
      setlike(!like);
    }
  };

  return (
    <div className="justify-center pt-16 pb-6 flex flex-row items-center">
      {loading ? (
        <AiOutlineLoading
          className="animate-spin"
          style={{ fontSize: "1.5rem" }}
        />
      ) : (
        <>
          <button onClick={handelClick} disabled={loading ? true : false}>
            {!like ? (
              <AiOutlineHeart style={{ fontSize: "2rem" }} />
            ) : (<AiFillHeart
              style={{ fontSize: "2rem", color: "rgba(220, 38, 38)" }}
            />

            )}
          </button>

        </>
      )}
    </div>
  );
}

export default LikeBtn;
