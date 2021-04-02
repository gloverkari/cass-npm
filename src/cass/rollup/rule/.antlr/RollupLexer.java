// Generated from c:\workspace\cass-npm\src\cass\rollup\rule\Rollup.g4 by ANTLR 4.8
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class RollupLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.8", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		NUMBER=1, BOOLEAN=2, LOGICAL_OPERATOR=3, MATH_OPERATOR=4, QUANTATIVE_OPERATOR=5, 
		WS=6, KEY=7, LEFT_BRACE=8, RIGHT_BRACE=9, VALUE=10;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"NUMBER", "BOOLEAN", "LOGICAL_OPERATOR", "MATH_OPERATOR", "QUANTATIVE_OPERATOR", 
			"WS", "KEY", "LEFT_BRACE", "RIGHT_BRACE", "VALUE"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, "'['", "']'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "NUMBER", "BOOLEAN", "LOGICAL_OPERATOR", "MATH_OPERATOR", "QUANTATIVE_OPERATOR", 
			"WS", "KEY", "LEFT_BRACE", "RIGHT_BRACE", "VALUE"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}


	public RollupLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "Rollup.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2\f`\b\1\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\3\2\6\2\31\n\2\r\2\16\2\32\3\2\3\2\6\2\37\n\2\r\2\16\2 \5\2#\n\2\3"+
		"\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\5\3.\n\3\3\4\3\4\3\4\3\4\3\4\5\4\65"+
		"\n\4\3\5\3\5\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\5"+
		"\6G\n\6\3\7\6\7J\n\7\r\7\16\7K\3\b\6\bO\n\b\r\b\16\bP\3\t\3\t\3\n\3\n"+
		"\3\13\3\13\3\13\3\13\3\13\3\13\6\13]\n\13\r\13\16\13^\2\2\f\3\3\5\4\7"+
		"\5\t\6\13\7\r\b\17\t\21\n\23\13\25\f\3\2\6\5\2,-//\61\61\5\2\13\f\17\17"+
		"\"\"\5\2\60\60C\\c|\3\2\"\"\2l\2\3\3\2\2\2\2\5\3\2\2\2\2\7\3\2\2\2\2\t"+
		"\3\2\2\2\2\13\3\2\2\2\2\r\3\2\2\2\2\17\3\2\2\2\2\21\3\2\2\2\2\23\3\2\2"+
		"\2\2\25\3\2\2\2\3\30\3\2\2\2\5-\3\2\2\2\7\64\3\2\2\2\t\66\3\2\2\2\13F"+
		"\3\2\2\2\rI\3\2\2\2\17N\3\2\2\2\21R\3\2\2\2\23T\3\2\2\2\25V\3\2\2\2\27"+
		"\31\4\62;\2\30\27\3\2\2\2\31\32\3\2\2\2\32\30\3\2\2\2\32\33\3\2\2\2\33"+
		"\"\3\2\2\2\34\36\7\60\2\2\35\37\4\62;\2\36\35\3\2\2\2\37 \3\2\2\2 \36"+
		"\3\2\2\2 !\3\2\2\2!#\3\2\2\2\"\34\3\2\2\2\"#\3\2\2\2#\4\3\2\2\2$%\7v\2"+
		"\2%&\7t\2\2&\'\7w\2\2\'.\7g\2\2()\7h\2\2)*\7c\2\2*+\7n\2\2+,\7u\2\2,."+
		"\7g\2\2-$\3\2\2\2-(\3\2\2\2.\6\3\2\2\2/\60\7C\2\2\60\61\7P\2\2\61\65\7"+
		"F\2\2\62\63\7Q\2\2\63\65\7T\2\2\64/\3\2\2\2\64\62\3\2\2\2\65\b\3\2\2\2"+
		"\66\67\t\2\2\2\67\n\3\2\2\289\7<\2\29G\7>\2\2:;\7<\2\2;G\7@\2\2<=\7<\2"+
		"\2=>\7>\2\2>G\7?\2\2?@\7<\2\2@A\7@\2\2AG\7?\2\2BC\7<\2\2CD\7#\2\2DG\7"+
		"?\2\2EG\7<\2\2F8\3\2\2\2F:\3\2\2\2F<\3\2\2\2F?\3\2\2\2FB\3\2\2\2FE\3\2"+
		"\2\2G\f\3\2\2\2HJ\t\3\2\2IH\3\2\2\2JK\3\2\2\2KI\3\2\2\2KL\3\2\2\2L\16"+
		"\3\2\2\2MO\t\4\2\2NM\3\2\2\2OP\3\2\2\2PN\3\2\2\2PQ\3\2\2\2Q\20\3\2\2\2"+
		"RS\7]\2\2S\22\3\2\2\2TU\7_\2\2U\24\3\2\2\2VW\7j\2\2WX\7v\2\2XY\7v\2\2"+
		"YZ\7r\2\2Z\\\3\2\2\2[]\n\5\2\2\\[\3\2\2\2]^\3\2\2\2^\\\3\2\2\2^_\3\2\2"+
		"\2_\26\3\2\2\2\f\2\32 \"-\64FKP^\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}