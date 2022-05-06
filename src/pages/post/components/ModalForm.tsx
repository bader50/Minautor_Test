import { useParams } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { putUserInfo } from "../../../api/httpService";
import { selectUser, updateUser } from "../../../store/features/users/usersSlice";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import {
  Button,
  ButtonContainer,
  Fieldset,
  Form,
  Input,
  Label,
} from "../styles/Modal";
import "react-toastify/dist/ReactToastify.css";

type Props = {
  onClose: () => void;
};

type Inputs = {
  firstName: string;
  lastName: string;
};

function ModalForm({ onClose }: Props) {
  const { id } = useParams<{ id: string }>();
  const user = useAppSelector((state) => selectUser(state, Number(id)));
  const dispatch = useAppDispatch();
  const [firstName, lastName] = user.name.split(" ");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    putUserInfo(user, data).then((response) => {
      dispatch(updateUser(response));
      toast("Your name is updated!");
      onClose();
    });
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Fieldset>
        <Label htmlFor="firstName">Firstname</Label>
        <Input
          {...register("firstName", { required: true })}
          defaultValue={firstName}
        />
        {errors.firstName && <span>This field is required</span>}
      </Fieldset>
      <Fieldset>
        <Label htmlFor="Lastname">Lastname</Label>
        <Input
          {...register("lastName", { required: true })}
          defaultValue={lastName}
        />
        {errors.lastName && <span>This field is required</span>}
      </Fieldset>
      <ButtonContainer>
        <Button type="submit">Submit your name</Button>
      </ButtonContainer>
    </Form>
  );
}

export default ModalForm;
