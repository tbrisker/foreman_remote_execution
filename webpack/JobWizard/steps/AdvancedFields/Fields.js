import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, TextInput } from '@patternfly/react-core';
import { translate as __ } from 'foremanReact/common/I18n';
import { helpLabel } from '../form/FormHelpers';

export const EffectiveUserField = ({ value, setValue }) => (
  <FormGroup
    label={__('Effective user')}
    labelIcon={helpLabel(
      __(
        'A user to be used for executing the script. If it differs from the SSH user, su or sudo is used to switch the accounts.'
      ),
      'effective-user'
    )}
    fieldId="effective-user"
  >
    <TextInput
      autoComplete="effective-user"
      id="effective-user"
      type="text"
      value={value}
      onChange={newValue => setValue(newValue)}
    />
  </FormGroup>
);

export const TimeoutToKillField = ({ value, setValue }) => (
  <FormGroup
    label={__('Timeout to kill')}
    labelIcon={helpLabel(
      __(
        'Time in seconds from the start on the remote host after which the job should be killed.'
      ),
      'timeout-to-kill'
    )}
    fieldId="timeout-to-kill"
  >
    <TextInput
      type="number"
      value={value}
      placeholder={__('For example: 1, 2, 3, 4, 5...')}
      autoComplete="timeout-to-kill"
      id="timeout-to-kill"
      onChange={newValue => setValue(newValue)}
    />
  </FormGroup>
);

export const PasswordField = ({ value, setValue }) => (
  <FormGroup
    label={__('Password')}
    labelIcon={helpLabel(
      __(
        'Password is stored encrypted in DB until the job finishes. For future or recurring executions, it is removed after the last execution.'
      ),
      'password'
    )}
    fieldId="password"
  >
    <TextInput
      autoComplete="password"
      id="password"
      type="password"
      placeholder="*****"
      value={value}
      onChange={newValue => setValue(newValue)}
    />
  </FormGroup>
);

export const KeyPassphraseField = ({ value, setValue }) => (
  <FormGroup
    label={__('Private key passphrase')}
    labelIcon={helpLabel(
      __(
        'Key passphrase is only applicable for SSH provider. Other providers ignore this field. Passphrase is stored encrypted in DB until the job finishes. For future or recurring executions, it is removed after the last execution.'
      ),
      'key-passphrase'
    )}
    fieldId="key-passphrase"
  >
    <TextInput
      autoComplete="key-passphrase"
      id="key-passphrase"
      type="password"
      placeholder="*****"
      value={value}
      onChange={newValue => setValue(newValue)}
    />
  </FormGroup>
);

export const EffectiveUserPasswordField = ({ value, setValue }) => (
  <FormGroup
    label={__('Effective user password')}
    labelIcon={helpLabel(
      __(
        'Effective user password is only applicable for SSH provider. Other providers ignore this field. Password is stored encrypted in DB until the job finishes. For future or recurring executions, it is removed after the last execution.'
      ),
      'effective-user-password'
    )}
    fieldId="effective-user-password"
  >
    <TextInput
      autoComplete="effective-user-password"
      id="effective-user-password"
      type="password"
      placeholder="*****"
      value={value}
      onChange={newValue => setValue(newValue)}
    />
  </FormGroup>
);

export const ConcurrencyLevelField = ({ value, setValue }) => (
  <FormGroup
    label={__('Concurrency level')}
    labelIcon={helpLabel(
      __(
        'Run at most N tasks at a time. If this is set and proxy batch triggering is enabled, then tasks are triggered on the smart proxy in batches of size 1.'
      ),
      'concurrency-level'
    )}
    fieldId="concurrency-level"
  >
    <TextInput
      min={1}
      type="number"
      autoComplete="concurrency-level"
      id="concurrency-level"
      placeholder={__('For example: 1, 2, 3, 4, 5...')}
      value={value}
      onChange={newValue => setValue(newValue)}
    />
  </FormGroup>
);

export const TimeSpanLevelField = ({ value, setValue }) => (
  <FormGroup
    label={__('Time span')}
    labelIcon={helpLabel(
      __(
        'Distribute execution over N seconds. If this is set and proxy batch triggering is enabled, then tasks are triggered on the smart proxy in batches of size 1.'
      ),
      'time-span'
    )}
    fieldId="time-span"
  >
    <TextInput
      min={1}
      type="number"
      autoComplete="time-span"
      id="time-span"
      placeholder={__('For example: 1, 2, 3, 4, 5...')}
      value={value}
      onChange={newValue => setValue(newValue)}
    />
  </FormGroup>
);

EffectiveUserField.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  setValue: PropTypes.func.isRequired,
};
EffectiveUserField.defaultProps = {
  value: '',
};

TimeoutToKillField.propTypes = EffectiveUserField.propTypes;
TimeoutToKillField.defaultProps = EffectiveUserField.defaultProps;
PasswordField.propTypes = EffectiveUserField.propTypes;
PasswordField.defaultProps = EffectiveUserField.defaultProps;
KeyPassphraseField.propTypes = EffectiveUserField.propTypes;
KeyPassphraseField.defaultProps = EffectiveUserField.defaultProps;
EffectiveUserPasswordField.propTypes = EffectiveUserField.propTypes;
EffectiveUserPasswordField.defaultProps = EffectiveUserField.defaultProps;
ConcurrencyLevelField.propTypes = EffectiveUserField.propTypes;
ConcurrencyLevelField.defaultProps = EffectiveUserField.defaultProps;
TimeSpanLevelField.propTypes = EffectiveUserField.propTypes;
TimeSpanLevelField.defaultProps = EffectiveUserField.defaultProps;
