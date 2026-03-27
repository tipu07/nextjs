const useReferralLink = (ref, compaign_name) => {
  localStorage.removeItem("ref");
  localStorage.removeItem("compaign_name");
  localStorage.setItem("ref", ref);
  localStorage.setItem("compaign_name", compaign_name);
  return ref;
};

export default useReferralLink;
