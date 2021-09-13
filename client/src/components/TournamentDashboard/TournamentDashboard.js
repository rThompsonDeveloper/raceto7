// Components
import TournamentForm from "../TournamentForm/TournamentForm";

// Hooks
import useTournamentDashboard from "../../hooks/useTournamentDashboard";

// Styles
import {
  Container,
  Name,
  Group,
  ActiveStatus,
  Button,
  Input,
  Label,
  Save,
  Form,
  Column,
  Remove,
} from "./Styles";

// Utils
import fixDate from "../../utils/fixDate";

const TournamentDashboard = ({ tournament }) => {
  const { name, _id, dateOf, active, occurs } = tournament;

  const {
    edit,
    authorizeDelete,
    handleEdit,
    activeHandler,
    update,
    handleShowPostpone,
    postpone,
    showPostpone,
    fromRef,
    toRef,
    removePostpone,
  } = useTournamentDashboard(_id);

  return edit ? (
    <TournamentForm tournament={tournament} func={update} close={handleEdit} />
  ) : (
    <Container>
      <Group style={{ padding: "10px" }}>
        <Name>{name}</Name>
        <ActiveStatus color={active ? "green" : "red"}>
          {active ? "Active" : "Inactive"}
        </ActiveStatus>
        <Name>{fixDate(dateOf)}</Name>
        <Name>{occurs}</Name>
      </Group>
      <Group style={{ borderTop: "1px solid #4484ce" }}>
        <Button
          style={{
            borderRight: "1px solid #4484ce",
            borderBottomLeftRadius: "10px",
          }}
          onClick={handleEdit}
          type="link"
        >
          Edit
        </Button>
        <Button
          style={{ borderRight: "1px solid #4484ce" }}
          type="link"
          onClick={activeHandler(active)}
        >
          {active ? "Deactivate" : "Activate"}
        </Button>
        <Button
          open={showPostpone}
          onClick={handleShowPostpone}
          style={{ borderRight: "1px solid #4484ce" }}
          type="link"
        >
          Postpone
        </Button>
        <Button
          style={{ borderBottomRightRadius: "10px" }}
          type="link"
          onClick={authorizeDelete(name)}
        >
          Delete
        </Button>
      </Group>
      {showPostpone && (
        <Form onSubmit={postpone}>
          <Column>
            <Label htmlFor="from">From</Label>
            <Input
              type="date"
              ref={fromRef}
              defaultValue={
                tournament.postpone && fixDate(tournament.postpone.from, true)
              }
              required
            />
          </Column>
          <Column>
            <Label htmlFor="to">to</Label>
            <Input
              type="date"
              ref={toRef}
              defaultValue={
                tournament.postpone && fixDate(tournament.postpone.to, true)
              }
              required
            />
          </Column>
          <Column style={{ alignItems: "flex-end" }}>
            {tournament.postpone && (
              <Remove type="button" onClick={removePostpone}>
                Remove
              </Remove>
            )}
            <Save type="submit">Save</Save>
          </Column>
        </Form>
      )}
    </Container>
  );
};

export default TournamentDashboard;
