export default function useCallFilters() {
  const filterByCallType = (calls, callType) => {
    return calls.filter( (call) => {
      return (call.call_type === callType && !call.is_archived);
    });
  };

  const filterByArchived = (calls) => {
    return calls.filter( (call) => {
      return call.is_archived;
    });
  };

  const filterByNotArchived = (calls) => {
    return calls.filter( (call) => {
      return !call.is_archived;
    });
  };

  return { filterByCallType, filterByArchived, filterByNotArchived };
};