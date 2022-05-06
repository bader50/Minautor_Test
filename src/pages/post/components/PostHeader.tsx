import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import Banner from "../../../ui/Banner.component";
import Modal from "./Modal.";
import { ToastContainer } from "react-toastify";
import { FaArrowLeft, FaPen } from "react-icons/fa";
import { PostTitle } from "../styles/PostHeader";

type Props = {
  userName: string;
};

function PostHeader({ userName }: Props) {
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();
  const toggleModal = () => setModal(!modal);

  return (
    <Fragment>
      <Modal isOpen={modal} onClose={toggleModal} />
      <PostTitle>
        <FaArrowLeft size={50} onClick={() => navigate(-1)} />
        <Banner title={`${userName} list of posts`} />
        <FaPen size={50} onClick={() => toggleModal()} />
      </PostTitle>
      <ToastContainer />
    </Fragment>
  );
}

export default PostHeader;
