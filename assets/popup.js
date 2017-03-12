const SPLUNK_BASE_URL_PREFIX = 'https://splunkbase.splunk.com/apps/#/search/';
const SPLUNK_ANWSERS_URL_PREFIX = 'https://answers.splunk.com/search.html?'

document.addEventListener('DOMContentLoaded', () => {
  const submitButton = document.querySelector('#submit');
  const textInput = document.querySelector('#searchText');
  const questionRadio = document.querySelector('#radioQuestion');
  const appRadio = document.querySelector('#radioApp');
  const topicRadio = document.querySelector('#radioTopic');

  const handleSearch = () => {
    let url = 'SPLUNK_ANWSERS_URL_PREFIX';
    const searchText = textInput.value;

    if (questionRadio.checked) {
      url = `${SPLUNK_ANWSERS_URL_PREFIX}q=${searchText}&type=question`;
    } else if (appRadio.checked) {
      url = `${SPLUNK_BASE_URL_PREFIX}${searchText}`;
    } else if (topicRadio.checked) {
      url = `${SPLUNK_ANWSERS_URL_PREFIX}q=${searchText}&type=topic`;
    }

    window.open(url,'_blank');
  };

  submitButton.addEventListener('click', handleSearch);
  textInput.addEventListener('keydown', e => {
    if (e.keyCode === 13) {
      handleSearch();
    }
  });
});
