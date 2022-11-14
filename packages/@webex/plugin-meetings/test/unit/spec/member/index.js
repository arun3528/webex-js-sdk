import sinon from 'sinon';
import {assert} from '@webex/test-helper-chai';

import MemberUtil from '../../../../src/member/util';
import Member from '../../../../src/member';


describe('member', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('checks that processParticipant calls isHandRaised', () => {
    const participant = {controls: {}};

    const member = new Member({});

    sinon.spy(MemberUtil, 'isHandRaised');
    member.processParticipant(participant);

    assert.calledOnceWithExactly(MemberUtil.isHandRaised, participant);
  });
});
