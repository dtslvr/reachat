import { FC, ReactNode, useContext, useMemo } from 'react';
import { GroupedSessions, groupSessionsByDate } from '@/utils/grouping';
import { ChatContext } from '@/ChatContext';

export interface SessionGroupsProps {
  /**
   * Render function for the session groups.
   */
  children: (groups: GroupedSessions[]) => ReactNode;
}

export const SessionGroups: FC<SessionGroupsProps> = ({ children }) => {
  const { sessions } = useContext(ChatContext);
  const groups = useMemo(() => groupSessionsByDate(sessions), [sessions]);

  return <>{children(groups)}</>;
};
