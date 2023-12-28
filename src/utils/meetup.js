import store from '../store/store';

function generateUniqueId() {
  try {
    const meetUpIds = Object.keys(store.getState().meetup.meetups);
    const meetUpIdsNumbers = meetUpIds.map((id) => parseInt(id.split('m')[1]));
    const orderedMeetUpIdsNumbers = meetUpIdsNumbers.sort((a, b) => a - b);
    return (
      'm' + (orderedMeetUpIdsNumbers[orderedMeetUpIdsNumbers.length - 1] + 1)
    );
  } catch {
    throw new Error('Error generating unique meetup id');
  }
}

export { generateUniqueId };
