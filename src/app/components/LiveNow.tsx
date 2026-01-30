import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronDown } from 'lucide-react';
import { LiveMatch } from '@/app/data/mockData';
import { useNavigate } from 'react-router';
import { useState } from 'react';

interface LiveNowProps {
  matches: LiveMatch[];
}

export function LiveNow({ matches }: LiveNowProps) {
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);

  if (matches.length === 0) {
    return null; // Collapse when no live events
  }

  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-gradient-to-r from-red-500/70 via-red-600/80 to-red-500/70 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Live Now Header - Always Visible */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full py-3 flex items-center justify-between group hover:opacity-90 transition-opacity"
        >
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <motion.div
                className="w-2 h-2 bg-white rounded-full"
                animate={{
                  opacity: [1, 0.3, 1],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              <h2 className="text-white font-bold text-sm uppercase tracking-wider">
                Live Now
              </h2>
            </div>
            <div className="text-white/80 text-xs font-medium px-2 py-0.5 bg-white/20 rounded-full">
              {matches.length}
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-white/80 text-xs font-medium hidden sm:block">
              {isExpanded ? 'Collapse' : 'View matches'}
            </span>
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="w-5 h-5 text-white" />
            </motion.div>
          </div>
        </button>

        {/* Expandable Content - Live Matches */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="flex gap-3 overflow-x-auto pb-3 scrollbar-hide snap-x snap-mandatory">
                {matches.map((match, index) => (
                  <motion.button
                    key={match.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => navigate(`/live-match/${match.id}`)}
                    className="flex-shrink-0 w-72 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all snap-start group hover:bg-white active:scale-[0.98]"
                  >
                    {/* Match Header with Sport & Status */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <motion.div
                          className="w-1.5 h-1.5 bg-red-500 rounded-full"
                          animate={{
                            opacity: [1, 0.3, 1],
                            scale: [1, 1.3, 1],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: 'easeInOut',
                          }}
                        />
                        <span className="text-xs font-bold text-red-600 uppercase">
                          {match.status}
                        </span>
                      </div>
                      <span className="text-xs font-semibold text-slate-500">
                        {match.time}
                      </span>
                    </div>

                    {/* Teams & Scores */}
                    <div className="space-y-3">
                      {/* Team 1 */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 flex-1 min-w-0">
                          <div className="text-2xl flex-shrink-0">{match.team1.logo}</div>
                          <div className="font-semibold text-slate-900 truncate">
                            {match.team1.name}
                          </div>
                        </div>
                        <div className="text-2xl font-bold text-slate-900 ml-3">
                          {match.team1.score}
                        </div>
                      </div>

                      {/* Divider */}
                      <div className="h-px bg-slate-200" />

                      {/* Team 2 */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 flex-1 min-w-0">
                          <div className="text-2xl flex-shrink-0">{match.team2.logo}</div>
                          <div className="font-semibold text-slate-900 truncate">
                            {match.team2.name}
                          </div>
                        </div>
                        <div className="text-2xl font-bold text-slate-900 ml-3">
                          {match.team2.score}
                        </div>
                      </div>
                    </div>

                    {/* View Details Link */}
                    <div className="flex items-center justify-center gap-1 mt-4 pt-3 border-t border-slate-100">
                      <span className="text-xs font-semibold text-[#1DB954] group-hover:text-[#1DB954]/80">
                        View Live Stats
                      </span>
                      <ChevronRight className="w-4 h-4 text-[#1DB954] group-hover:text-[#1DB954]/80 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}