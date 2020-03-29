import Vue from 'vue'
import Buefy, { BuefyConfig } from 'buefy'

Vue.use(Buefy, {
	defaultDialogCancelText: 'Cancel',
	defaultDialogConfirmText: 'Confirm',
	defaultIconPack: 'mdi',
	defaultInputAutocomplete: 'off',
	defaultNoticeQueue: false,
	defaultSnackbarDuration: 5000,
	defaultToastDuration: 5000,
} as BuefyConfig)
