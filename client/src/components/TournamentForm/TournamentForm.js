// Hooks
import useTournamentForm from "../../hooks/useTournamentForm";

// Styles
import {
  Wrapper,
  Form,
  Upload,
  Label,
  UploadImage,
  Image,
  UploadIcon,
  TopBar,
  MainContent,
  Title,
  Submit,
  BottomBar,
  Input,
  Row,
  Group,
  Select,
  CheckBox,
  Textarea,
  Back,
  Progress,
  ProgressWrapper,
  Close,
} from "./Styles";

//  Utils
import fixDate from "../../utils/fixDate";

export const TournamentForm = (props) => {
  const {
    changeImage,
    steps,
    formProgress,
    handleSubmit,
    tempPhoto,
    nameRef,
    states,
    occurances,
    placeRef,
    cityRef,
    stateRef,
    streetRef,
    zipRef,
    dateRef,
    timeRef,
    occursRef,
    gameTypes,
    tournamentStyles,
    eliminationTypes,
    gameTypeRef,
    eliminationTypeRef,
    hasCalcuttaRef,
    isHandicappedRef,
    phoneAlternativeRef,
    phoneMainRef,
    entryFeeRef,
    tournamentStyleRef,
    benefitForRef,
    moneyAddedRef,
    descriptionRef,
    back,
    newTournament,
  } = useTournamentForm(props.func, props?.tournament?._id);

  const getFormContent = () => {
    switch (formProgress) {
      case 0:
        return (
          <>
            <Label>Tournament Flyer</Label>
            <Image image={tempPhoto ? tempPhoto : props.tournament?.photo}>
              <Upload
                id="uploadBtn"
                type="file"
                accept="image/*"
                multiple={false}
                name="photo"
                onChange={changeImage}
                hidden
                key="photo"
              />
              <UploadImage htmlFor="uploadBtn">Upload</UploadImage>
              <UploadIcon />
            </Image>
            <Label htmlFor="name">Tournament Name</Label>
            <Input
              large
              required
              type="text"
              name="name"
              key="name"
              ref={nameRef}
              defaultValue={newTournament?.name || props?.tournament?.name}
            />
          </>
        );
      case 1:
        return (
          <>
            <Group>
              <Label htmlFor="place">Place</Label>
              <Input
                large
                type="text"
                name="place"
                key="place"
                ref={placeRef}
                defaultValue={newTournament?.place || props?.tournament?.place}
                required
              />
            </Group>
            <Row>
              <Group>
                <Label htmlFor="city">City</Label>
                <Input
                  required
                  type="text"
                  name="city"
                  key="city"
                  defaultValue={
                    newTournament?.city || props?.tournament?.location?.city
                  }
                  ref={cityRef}
                />
              </Group>
              <Group>
                <Label htmlFor="state">State</Label>
                <Select
                  name="state"
                  ref={stateRef}
                  key="state"
                  defaultValue={
                    newTournament?.state || props?.tournament?.location?.state
                  }
                >
                  {states.map((state, i) => (
                    <option key={i} value={state}>
                      {state}
                    </option>
                  ))}
                </Select>
              </Group>
            </Row>
            <Row>
              <Group>
                <Label htmlFor="street">Street</Label>
                <Input
                  required
                  type="text"
                  key="street"
                  name="street"
                  ref={streetRef}
                  defaultValue={
                    newTournament?.street || props?.tournament?.location?.street
                  }
                />
              </Group>
              <Group>
                <Label htmlFor="zip">Zip</Label>
                <Input
                  key="zip"
                  required
                  type="text"
                  name="zip"
                  ref={zipRef}
                  defaultValue={
                    newTournament?.zip || props?.tournament?.location?.zip
                  }
                />
              </Group>
            </Row>
            <Row>
              <Group>
                <Label htmlFor="startDate">Start Date</Label>
                <Input
                  required
                  key="startDate"
                  type="date"
                  name="startDate"
                  ref={dateRef}
                  defaultValue={
                    props.tournament
                      ? fixDate(props?.tournament?.dateOf, true)
                      : newTournament?.date
                  }
                />
              </Group>
              <Group>
                <Label htmlFor="startTime">Start Time</Label>
                <Input
                  required
                  key="startTime"
                  type="time"
                  name="startTime"
                  ref={timeRef}
                  defaultValue={
                    newTournament?.startTime || props?.tournament?.startTime
                  }
                />
              </Group>
            </Row>
            <Group>
              <Label htmlFor="occurs">Occurs</Label>
              <Select
                name="occurs"
                key="occurs"
                ref={occursRef}
                defaultValue={
                  newTournament?.occurs || props?.tournament?.occurs
                }
              >
                {occurances.map((occurance, i) => (
                  <option key={i} value={occurance}>
                    {occurance}
                  </option>
                ))}
              </Select>
            </Group>
          </>
        );
      case 2:
        return (
          <>
            <Row>
              <Group>
                <Label htmlFor="gameType">Game Type</Label>
                <Select
                  key="gameType"
                  name="gameType"
                  ref={gameTypeRef}
                  defaultValue={
                    newTournament?.gameType || props?.tournament?.gameType
                  }
                >
                  {gameTypes.map((type, i) => (
                    <option key={i} value={type}>
                      {type}
                    </option>
                  ))}
                </Select>
              </Group>
              <Group small>
                <Label htmlFor="isHandicapped">Open?</Label>
                <CheckBox
                  key="isHandicapped"
                  type="checkbox"
                  name="isHandicapped"
                  ref={isHandicappedRef}
                  defaultChecked={
                    newTournament?.isHandicapped ||
                    props?.tournament?.isHandicapped
                  }
                />
              </Group>
            </Row>
            <Row>
              <Group>
                <Label htmlFor="entryFee">EntryFee</Label>
                <Input
                  large
                  required
                  type="text"
                  name="entryFee"
                  ref={entryFeeRef}
                  key="entryFee"
                  defaultValue={
                    newTournament?.entryFee || props?.tournament?.entryFee
                  }
                />
              </Group>
              <Group small>
                <Label htmlFor="hasCalcutta">Calc?</Label>
                <CheckBox
                  key="hasCalcutta"
                  type="checkbox"
                  name="hasCalcutta"
                  ref={hasCalcuttaRef}
                  defaultChecked={
                    newTournament?.hasCalcutta || props?.tournament?.hasCalcutta
                  }
                />
              </Group>
            </Row>
            <Row>
              <Group>
                <Label htmlFor="style">Style</Label>
                <Select
                  key="style"
                  name="style"
                  ref={tournamentStyleRef}
                  defaultValue={
                    newTournament?.tournamentStyle ||
                    props?.tournament?.tournamentStyle
                  }
                >
                  {tournamentStyles.map((style, i) => (
                    <option key={i} value={style}>
                      {style}
                    </option>
                  ))}
                </Select>
              </Group>
              <Group>
                <Label htmlFor="elimintation">Elimination</Label>
                <Select
                  key="elimination"
                  name="elimination"
                  ref={eliminationTypeRef}
                  defaultValue={
                    newTournament?.elimination || props?.tournament?.elimination
                  }
                >
                  {eliminationTypes.map((type, i) => (
                    <option key={i} value={type}>
                      {type}
                    </option>
                  ))}
                </Select>
              </Group>
            </Row>
            <Row>
              <Group>
                <Label htmlFor="benefitFor">Benefit for</Label>
                <Input
                  key="benefitFor"
                  type="text"
                  name="benefitFor"
                  ref={benefitForRef}
                  defaultValue={
                    newTournament?.benefitFor || props?.tournament?.benefitFor
                  }
                />
              </Group>
              <Group>
                <Label htmlFor="moneyAdded">Money Added?</Label>
                <Input
                  key="moneyAdded"
                  name="moneyAdded"
                  type="text"
                  ref={moneyAddedRef}
                  defaultValue={
                    newTournament?.moneyAdded || props?.tournament?.moneyAdded
                  }
                />
              </Group>
            </Row>
            <Row>
              <Group>
                <Label htmlFor="phoneMain">Phone</Label>
                <Input
                  key="phoneMain"
                  required
                  name="phoneMain"
                  type="text"
                  ref={phoneMainRef}
                  defaultValue={
                    newTournament?.phone || props?.tournament?.phone
                  }
                />
              </Group>
              <Group>
                <Label htmlFor="alternative">Alternative</Label>
                <Input
                  name="alternative"
                  key="alternative"
                  type="text"
                  ref={phoneAlternativeRef}
                  defaultValue={
                    newTournament?.phoneAlternative ||
                    props?.tournament?.phoneAlternative
                  }
                />
              </Group>
            </Row>
          </>
        );
      case 3:
        return (
          <Group>
            <Label htmlFor="description">Description</Label>
            <Textarea
              key="description"
              type="text"
              name="description"
              ref={descriptionRef}
              defaultValue={props?.tournament?.description}
            />
          </Group>
        );
      default:
        return <></>;
    }
  };

  return (
    <Wrapper>
      <Close onClick={props.close} />

      <Form onSubmit={handleSubmit}>
        <TopBar>
          <Title>{steps[formProgress]}</Title>
          <ProgressWrapper>
            {steps.map((step, i) => {
              return (
                <Progress on={i <= formProgress ? "true" : "false"} key={i} />
              );
            })}
          </ProgressWrapper>
        </TopBar>
        <MainContent>{getFormContent()}</MainContent>
        <BottomBar hasOneItem={formProgress === 0}>
          {formProgress !== 0 && (
            <Back type="button" onClick={back}>
              Back
            </Back>
          )}
          {steps.length - 1 === formProgress ? (
            <Submit type="submit">
              {props.tournament ? "Update Tournament" : "Add Tournament"}
            </Submit>
          ) : (
            <Submit type="submit">Next</Submit>
          )}
        </BottomBar>
      </Form>
    </Wrapper>
  );
};

export default TournamentForm;
