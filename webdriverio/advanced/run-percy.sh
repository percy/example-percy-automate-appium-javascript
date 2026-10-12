#!/usr/bin/env bash
# Runs the advanced suite under `percy exec` and fails the run when:
#  - the tests did not exit 0. The tests record their own exit status because `percy exec`
#    can report 0 when the run is interrupted by a signal;
#  - `percy exec` itself failed;
#  - Percy logged a capture error or a skipped capture, which the SDK swallows.
set -uo pipefail

status_file=$(mktemp)
trap 'rm -f "$status_file"' EXIT

percy exec -- bash -c 'npm run test:advanced; echo $? > "$0"' "$status_file" 2>&1 | tee percy-run.log
percy_status=$?
test_status=$(cat "$status_file" 2>/dev/null)

if [ "${test_status:-missing}" != "0" ]; then
  echo "Advanced tests did not pass (exit status: ${test_status:-missing})"
  exit 1
fi
if [ "$percy_status" != "0" ]; then
  echo "percy exec failed (exit status: $percy_status)"
  exit 1
fi
if grep -qiE 'Could not take|Could not post screenshot|Error taking screenshot|failed to take screenshot|Percy is not running|percy is disabled|: Error -' percy-run.log; then
  echo "Percy reported capture errors (see percy-run.log)"
  exit 1
fi
