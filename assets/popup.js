const SPLUNK_BASE_URL_PREFIX = 'https://splunkbase.splunk.com/apps/#/search/';
const SPLUNK_ANWSERS_URL_PREFIX = 'https://answers.splunk.com/search.html?'
const SPLUNK_DOC_PREFIX = 'https://docs.splunk.com/Special:SplunkSearch/docs?q=';

document.addEventListener('DOMContentLoaded', () => {
  const submitButton = document.querySelector('#submit');
  const textInput = document.querySelector('#searchText');
  const typeSelector = document.querySelector('#selector');

  const handleSearch = () => {
    let url = 'SPLUNK_ANWSERS_URL_PREFIX';
    const searchText = textInput.value;
    const type = typeSelector.value;

    if (type === 'question') {
      url = `${SPLUNK_ANWSERS_URL_PREFIX}q=${searchText}&type=question`;
    } else if (type === 'app') {
      url = `${SPLUNK_BASE_URL_PREFIX}${searchText}`;
    } else if (type === 'topic') {
      url = `${SPLUNK_ANWSERS_URL_PREFIX}q=${searchText}&type=topic`;
    } else if (type === 'doc') {
      url = `${SPLUNK_DOC_PREFIX}${searchText}`;
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
